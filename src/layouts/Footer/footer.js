import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "../../components";

const Footer = props => {
    const footerClasses = {
        mainSection: "justify-center bg-pink-light py-8",
        subSection: "flex justify-center text-sm space-x-6",
        iconLink: "text-gray-700 hover:text-gray-800 m-2",
        termConLink: "text-gray-400 flex justify-center text-sm tracking-wide",
        companyText: "text-white flex justify-center text-sm",
        copyright: "flex justify-center text-sm space-x-6 tracking-wide"
    };

    Icon.defaultProps = {
        size: '2.5em',
        color: '454545',
    };

    return (
        <div className={footerClasses.mainSection}>
            <div className={footerClasses.subSection}>
                <a href="mailto:sirawit@fahfahsworld.com" className={footerClasses.iconLink}>
                    <Icon icon="mail"/>
                </a>
                <a href="https://facebook.com/fahfahsnpth" className={footerClasses.iconLink}>
                    <Icon icon="facebook" />
                </a>
                <a href="https://instagram.com/fahfahfahs" className={footerClasses.iconLink}>
                    <Icon icon="instagram" />
                </a>
                <a href="https://twitter.com/fahfahsnpth" className={footerClasses.iconLink}>
                    <Icon icon="twitter" />
                </a>
                <a href="https://www.youtube.com/c/FahfahsNK" className={footerClasses.iconLink}>
                    <Icon icon="youtube" />
                </a>
            </div>
            <div className={footerClasses.copyright}>
                <footer>
                    ©FAHFAHSWORLD2021
                </footer>
            </div>
            <div className={footerClasses.termConLink}>
                <footer>
                    <Link to="/">TERM AND CONDITIONS</Link>
                    <Link to="/"> | </Link>
                    <Link to="/">POLICY</Link>
                </footer>
            </div>
            <div className={footerClasses.companyText}>
                <footer>
                    Little Friend World Co., Ltd.
                </footer>
            </div>
        </div>
    );
};

export default Footer;