import React from 'react';
import ErrorIndicator from '../error-indicator';

interface isState {
    hasError: boolean
}
export default class ErrorBoundary extends React.Component<{}, isState> {
    state = {
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }
    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            this.props.children
        )
    }
}