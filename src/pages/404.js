import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Button from "../components/Button";
export default function() {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>{" "}
      <section className="ls section_404 background_cover no_overlay section_padding_top_150 section_padding_bottom_150">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center text-sm-left">
              <div className="inline-block text-center">
                <p className="not_found">
                  <span className="highlight">404</span>
                  <span className="ops playfair grey">Ooops!</span>
                </p>
                <h2>Sorry, page not found!</h2>
                <p>
                  <Button whereTo="/" text="Back to Home" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
