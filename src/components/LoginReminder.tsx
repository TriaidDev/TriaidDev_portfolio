import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const LOGIN_REMINDER_DELAY = 30000; // 30 seconds in milliseconds

const LoginReminder: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return;

    // Set up the reminder timer for unauthenticated users
    const timerId = setTimeout(() => {
      setIsOpen(true);
    }, LOGIN_REMINDER_DELAY);

    // Reset timer on user activity
    const resetTimer = () => {
      clearTimeout(timerId);
      const newTimer = setTimeout(() => {
        setIsOpen(true);
      }, LOGIN_REMINDER_DELAY);
      return newTimer;
    };

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    let newTimerId = timerId;

    const activityHandler = () => {
      clearTimeout(newTimerId);
      newTimerId = resetTimer();
    };

    events.forEach(event => {
      document.addEventListener(event, activityHandler);
    });

    // Clean up
    return () => {
      clearTimeout(timerId);
      events.forEach(event => {
        document.removeEventListener(event, activityHandler);
      });
    };
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsOpen(false);
    navigate('/login');
  };

  const handleSignup = () => {
    setIsOpen(false);
    navigate('/signup');
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset timer when dialog is dismissed
    setTimeout(() => {
      if (!isAuthenticated) {
        setIsOpen(true);
      }
    }, LOGIN_REMINDER_DELAY);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-triaid-dark text-triaid-light border border-triaid-light/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Create an Account</DialogTitle>
          <DialogDescription className="text-triaid-light/70">
            Sign up to access exclusive content and features. It only takes a minute!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4">
            Join our community to get the latest updates, exclusive content, and special offers.
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleClose}
            className="sm:w-auto border-triaid-light/30 text-triaid-light hover:bg-triaid-light/10"
          >
            Maybe Later
          </Button>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              onClick={handleLogin}
              className="flex-1 sm:flex-none bg-triaid-light/10 text-triaid-light hover:bg-triaid-light/20"
            >
              Log In
            </Button>
            <Button
              onClick={handleSignup}
              className="flex-1 sm:flex-none bg-triaid-primary hover:bg-triaid-primary/90 text-white"
            >
              Sign Up
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginReminder;
