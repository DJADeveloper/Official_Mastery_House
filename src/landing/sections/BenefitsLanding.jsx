import React from "react";
import "../../home.css";
import { useMediaQuery } from "react-responsive";

const BenefitsLanding = () => {
  // Media query to detect mobile screen size
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="blog-section">
      <div className="box">
        <div className="about-content">
          <div className="about-c-top">
            <h4>Unlock Your Business's Full Potential</h4>
            <h2 className="custom-h3 gradient-text">
              Transform Your Business with Our
              <br /> Business Automation Solutions
            </h2>
            <p>
              At The Mastery House, we specialize in empowering businesses
              through smart automation strategies that streamline operations,
              reduce costs, and drive growth. Discover the unparalleled benefits
              of partnering with us for your business automation needs:
            </p>
          </div>

          <div className="about-grid">
            {/* Grid Layout for larger screens */}
            <div className="about-grid-content">
              <div className="ag-circle-1"></div>
              <h5>Boost Efficiency and Productivity</h5>
              <p>
                Our automation solutions are designed to eliminate repetitive
                tasks and optimize workflows, enabling your team to focus on
                strategic initiatives. Experience significant time savings and
                improved productivity, giving your business a competitive edge.
              </p>
            </div>
            <div className="about-grid-content agc-2">
              <div className="ag-circle-2"></div>
              <h5>Reduce Operational Costs</h5>
              <p>
                By automating key processes, we help reduce manual errors and
                operational costs. Our solutions are tailored to streamline your
                operations, maximize resource utilization, and enhance your
                bottom line.
              </p>
            </div>
            <div className="about-grid-content agc-3">
              <div className="ag-circle-3"></div>
              <h5>Scalable Solutions for Sustainable Growth</h5>
              <p>
                Our automation tools are built to scale with your business.
                Whether you are a startup or an established enterprise, we
                provide flexible solutions that adapt to your evolving needs,
                driving sustainable growth and innovation.
              </p>
            </div>
            {!isMobile && (
              <>
                <div className="about-grid-content">
                  <div className="ag-circle-1"></div>
                  <h5>Enhance Data Accuracy and Compliance</h5>
                  <p>
                    Automating your business processes not only increases
                    efficiency but also improves data accuracy and compliance.
                    Stay ahead of regulatory requirements while ensuring your
                    business data is reliable and secure.
                  </p>
                </div>
                <div className="about-grid-content agc-2">
                  <div className="ag-circle-2"></div>
                  <h5>Accelerate Decision-Making</h5>
                  <p>
                    With real-time data insights and analytics, our automation
                    solutions empower you to make faster, more informed
                    decisions. Drive your business forward with actionable
                    intelligence at your fingertips.
                  </p>
                </div>
                <div className="about-grid-content agc-3">
                  <div className="ag-circle-3"></div>
                  <h5>Future-Proof Your Business</h5>
                  <p>
                    Embrace the future with our cutting-edge automation
                    technology. Stay ahead of the competition and be prepared
                    for whatever comes next with solutions that evolve alongside
                    technological advancements.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsLanding;
