import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="page">
          <div className="surface-card p-6">
            <p className="section-kicker">Application error</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-950">
              Something went wrong.
            </h1>
            <p className="mt-3 text-slate-600">
              Refresh the page. If this keeps happening, check the browser console.
            </p>
            <pre className="mt-4 overflow-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">
              {this.state.error.message}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
