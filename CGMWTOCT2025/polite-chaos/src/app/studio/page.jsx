"use client";
import "./studio.css";
import TeamCards from "@/components/TeamCards/TeamCards";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="studio-page">
      <section className="studio-header">
        <div className="container">
          <div className="studio-header-row">
            <Copy delay={0.8}>
              <h1>Backend Engineer.</h1>
            </Copy>
          </div>

          <div className="studio-header-row">
            <Copy delay={0.95}>
              <h1>Distributed Systems.</h1>
            </Copy>
          </div>
        </div>
      </section>

      <section className="studio-copy">
        <div className="container">
          <div className="studio-copy-img">
            <img src="/studio/studio-header.jpg" alt="" />
          </div>

          <Copy animateOnScroll={true}>
            <p className="lg">
              I'm Jitendar Mahara, a Backend & Distributed Systems Engineer
              based in Chennai, India. I specialize in real-time, event-driven
              architectures — building systems that handle high throughput,
              maintain consistency under load, and recover gracefully from
              failure. My stack is Kafka, Redis, WebSockets, Node.js, and
              PostgreSQL.
            </p>

            <p className="lg">
              I've worked at LTIMindtree (client: Citi Bank) building secure
              banking APIs and real-time WebSocket sync, and at Raheja
              Developers designing Kafka-powered event pipelines. My key
              projects include an NSE-style stock exchange matching engine and a
              Zapier-like workflow automation platform. I'm a B.Tech ECE grad
              (2019–2023), active on LeetCode and GeeksforGeeks, and certified
              in Red Hat OpenShift, Kubernetes, and Ansible.
            </p>
          </Copy>
        </div>
      </section>

      <TeamCards />

      <Spotlight />

      <CTACard />

      <Footer />
    </div>
  );
};

export default Page;
