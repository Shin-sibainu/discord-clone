import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  return (
    <div role="alert">
      <p>Error Message</p>
      <pre>{error!.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
