"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className={cn(
          "relative z-[51]",
          isOpen ? "opacity-0" : "opacity-100"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      
      {/* Darkened overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[49] min-h-screen w-full bg-black/50",
          "transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      
      {/* Drawer */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 z-[50] h-screen w-64 bg-background shadow-xl",
          "transform transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <nav 
          id="mobile-menu"
          className="flex h-full flex-col p-6"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="mb-8 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="space-y-4">
            {links.map((link, index) => (
              <div
                key={link.href}
                className={cn(
                  "transform transition-all duration-500 ease-out",
                  "opacity-0 translate-x-16",
                  isOpen && "opacity-100 translate-x-0",
                  `delay-[${index * 300}ms]`
                )}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "block w-full rounded-md px-4 py-2 text-lg transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
} 