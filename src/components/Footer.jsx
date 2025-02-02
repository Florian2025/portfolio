import React from "react";
import { Container } from "./Container";
import logo from "../../public/logo.svg";

export const Footer = () => {
  return (
    <div className="p-10">
      <Container>
        <footer className="py-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
              <a href="/" className="col-span-2 mb-12 md:col-span-1">
                <img src={logo} alt="" />
                <span class="sr-only">Kutty Home Page</span>
              </a>
              <nav className="mb-8">
                <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
              <nav className="mb-8">
                <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
              <nav class="mb-8">
                <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};
