import React from 'react';

import MenuItem from '../menu-item/menu-item.conponent';
import './directory.styles.scss';
import DIRECTORY_DATA from './directory.data';


class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: DIRECTORY_DATA
        }
    }
    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        );
    }
}

export default Directory;