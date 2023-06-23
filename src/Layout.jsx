import React from "react";

const Layout = (props) => {
    return (
        // page layout component
        <section className="w-screen min-h-screen flex justify-center items-center">
            {props.children}
        </section>
    );
};

export default Layout;