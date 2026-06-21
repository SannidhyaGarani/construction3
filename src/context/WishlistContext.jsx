import React, { useEffect, useState, useContext } from 'react';
import { WishlistContext } from './wishlistContext.js';

const STORAGE_KEY = 'ambi_wishlist';

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // ignore write errors
    }
  }, [wishlistIds]);

  const toggleWishlist = (id) => {
    setWishlistIds((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  };

  const isInWishlist = (id) => wishlistIds.includes(id);

  const value = {
    wishlistIds,
    toggleWishlist,
    isInWishlist,
    count: wishlistIds.length,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook for consuming the context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

// File exports only a component to satisfy fast-refresh rule


