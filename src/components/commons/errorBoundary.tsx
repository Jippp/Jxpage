import { ReactNode, Component } from "react";

interface ErrorBoundaryProps {
  fallback: string | ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends Component {
  declare props: ErrorBoundaryProps;
  declare state: { hasError: boolean };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.error(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
