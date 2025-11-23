/**
 * Secure logging utility for production environments
 * Prevents sensitive information leakage via console
 */

type LogContext = string;

/**
 * Log errors securely - only in development
 * In production, errors are silently handled to prevent information disclosure
 */
export const logError = (context: LogContext, error: any): void => {
  // Only log to console in development
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, error);
  }
  
  // In production, you could send to monitoring service (Sentry, CloudWatch, etc.)
  // Example:
  // if (import.meta.env.PROD) {
  //   sendToMonitoring({ context, error: error.message, timestamp: Date.now() });
  // }
};

/**
 * Log warnings securely - only in development
 */
export const logWarning = (context: LogContext, message: string): void => {
  if (import.meta.env.DEV) {
    console.warn(`[${context}]`, message);
  }
};

/**
 * Log info messages - only in development
 */
export const logInfo = (context: LogContext, message: string): void => {
  if (import.meta.env.DEV) {
    console.log(`[${context}]`, message);
  }
};
