import React from "react";

const Layout = (props) => {
    return (
        // page layout component
        <section className="min-h-screen flex justify-center items-center">
            {props.children}
        </section>
    );
};

export default Layout;