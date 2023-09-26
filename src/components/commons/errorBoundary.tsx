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

  // 借助了this.setState()实现的，
  // 在render阶段的handleError之后，
  // 在commit阶段的captureCommitPhaseError之后，
  // 都会执行this.setState(
  // getDerivedStateFromError.bind(null, error)
  // )
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // 原理类似
  componentDidCatch(error: any) {
    console.error(error);
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
