"use client";
import "./CTACard.css";
import Button from "../Button/Button";
import { MdArticle } from "react-icons/md";
import Copy from "../Copy/Copy";

const CTACard = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-copy">
          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="sm">Open to Work</p>
            </Copy>
          </div>

          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="lg">
                I'm looking for backend or distributed systems roles where I can
                work on real-time data, high-throughput pipelines, and
                systems that need to stay fast under load.
              </p>
            </Copy>

            <Button
              animateOnScroll={true}
              delay={0.25}
              variant="dark"
              href="/contact"
            >
              Get in touch
            </Button>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-card-copy">
            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <h3>The Engineering Mindset</h3>
              </Copy>
            </div>

            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <p>
                  Every system I build starts with one question: what breaks
                  first under load? From there, I design for failure — retries,
                  idempotency, backpressure, dead letter queues.
                </p>

                <p>
                  The goal isn’t just a working system. It’s one that’s still
                  working at 3x traffic, with a bad network, and zero downtime.
                </p>
              </Copy>

              <Button
                animateOnScroll={true}
                delay={0.25}
                variant="light"
                icon={MdArticle}
                href="/studio"
              >
                Read about me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
