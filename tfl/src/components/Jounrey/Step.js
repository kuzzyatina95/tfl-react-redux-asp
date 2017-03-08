import React, { PropTypes, Component } from 'react'

export default class Step extends Component {
    render() {
        const step = this.props.step

        var descriptionHeading = '';

        switch (step.descriptionHeading) {
            case 'Continue along ':
                descriptionHeading = <i className="fa fa-arrow-up" aria-hidden="true"></i>;
                break;
            case 'Turn left':
                descriptionHeading = <i className="fa fa-arrow-left" aria-hidden="true"></i>;
                break;
            case 'Take a slight left':
                descriptionHeading = <i className="fa fa-arrow-left" aria-hidden="true"></i>;
                break;
            case 'Turn right':
                descriptionHeading = <i className="fa fa-arrow-right" aria-hidden="true"></i>;
                break;
            case 'Take a slight right':
                descriptionHeading = <i className="fa fa-arrow-right" aria-hidden="true"></i>;
                break;
            default:
                descriptionHeading = step.descriptionHeading;
                break;
        }


        return (
            <div>
                <h4>{descriptionHeading} {step.descriptionHeading}</h4>
                <p>{step.description}</p>
            </div>
        )
    }
}