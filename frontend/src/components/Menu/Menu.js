import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

const Menu = ({ open, ...props }) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a href="/" tabIndex={tabIndex}>
                <span aria-hidden="true"></span>
                Exam List
            </a>
            <a href="/AddExam" tabIndex={tabIndex}>
                <span aria-hidden="true">📚</span>
                Add exam
            </a>
            <a href="/Calendar" tabIndex={tabIndex}>
                <span aria-hidden="true">📆</span>
                Calendar
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;