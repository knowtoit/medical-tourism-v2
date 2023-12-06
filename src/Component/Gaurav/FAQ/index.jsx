// ** React Imports
import { useState } from "react";
import "./style.css";
// ** Icons Imports
import * as Icon from "react-feather";

// ** Reactstrap Imports
import {
  Nav,
  Row,
  Col,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  UncontrolledAccordion
} from "reactstrap";

// ** Images
import illustration from "@src/assets/images/illustration/faq-illustrations.svg";

const Faqs = () => {
  let data = {
    payment: {
      icon: "CreditCard",
      title: "Payment",
      subtitle: "Which license do I need?",
      qandA: [
        {
          question: "How Much Should I Budget for My Medical Tourism Trip?",
          ans: "Your particular lifestyle, the medical tourism destination, and the type of medical tourism procedure you will be undergoing will dictate, to a large degree, how much money you will be spending. In general, the farther away your medical tourism destination the more you will pay for airfare. So, for example, expect to pay more if you are flying from Dallas to Bangkok, Thailand, than you would for a flight to Monterey, Mexico. At the same time, you also need to take into account that some medical tourism destinations are more expensive than others. So even if a particular country is cheaper to travel to, you will need to factor in the relative cost of “living,” in comparison to another medical tourism destination What about your lifestyle preferences? Do you plan to stay at a five-star hotel or are you comfortable “roughing” it at a local bed and breakfast? Some adventurous souls prefer to immerse themselves in the local culture and will literally live on a shoestring budget. Most everyone else though will tend to fall somewhere between the Holiday Inn and Club Med. The type of medical tourism procedure or medical tourism treatment you are undergoing will also play a large part in your decision of where to stay and what you will do. A medical tourism patient undergoing open heart surgery or a knee replacement will require extra care and very comfortable conditions after leaving the hospital. Not the case for someone coming for a dental bridge or an eyelid lift. Wherever you decide to stay, make sure it serves your needs as a medical tourism patient. Many of the expenses of a medical tourism trip will be the same as those of a “normal” trip or vacation. At the very minimum you will need to budget for airfare, hotel accommodations, transportation requirements and meals. Sightseeing tours and souvenirs are also a real possibility, particularly if you are traveling with a companion"
        },
        {
          question: "What are the Risks Associated with Medical Tourism?",
          ans: "Although there are many benefits associated with medical tourism, there are also certain risks that must be weighed before making a final decision to travel abroad."
        },
        {
          question: "What does non-exclusive mean?",
          ans: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan."
        },
        {
          question: "What is a Familiarization Tour?",
          ans: "In medical tourism, a Familiarization Tour or Fam Trip is a trip organized by a public or private entity seeking to showcase the healthcare and tourism assets in a certain region, country or city, in order to attract new business (usually in the form of patients). Fam trips are often organized by the tourism board, medical tourism cluster, or by a Destination Management Organization (DMO) representing a destination. Participants in the Fam trip are typically buyers of medical tourism services such as foreign governments, insurance companies, employers and medical tourism facilitators. They are vetted in advance and usually have all their travel, accommodation and maintenance fees covered during the trip."
        },
        {
          question: "What is a Medical Tourism Facilitator?",
          ans: "Sometimes referred to as medical tourism agencies, or a medical travel facilitator, these are companies that, as their name suggests, act as facilitators or intermediaries for patients seeking treatments in other countries or regions. Medical Tourism Facilitators have played an important role in promoting the growth of medical tourism, and for many medical tourism patients, represent their first face to face contact with the concept of medical tourism.Over the last 10-15 years, thousands of these companies have popped up, most sporting names synonymous with health and travel. They function much like a travel agency, requesting and obtaining passports, booking flights, and arranging a medical tourism patient’s lodging, transportation and tours. The key difference, of course, is that they also serve as the liaison or mediator between you and the international hospital and doctor. In effect, it is the facilitator’s job to repackage the medical provider’s service offering, make it more appealing, and then guide you along the medical tourism process"
        }
      ]
    }
  };

  // ** States
  const [activeTab, setActiveTab] = useState("Payment");

  const toggleTab = (tab) => setActiveTab(tab);

  const renderTabContent = () => {
    return Object.values(data).map((item) => {
      const IconTag = Icon[item.icon];

      return (
        <TabPane key={item.title} tabId={item.title}>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <div className="mb-0 d-flex justify-content-center">
                MORE INFORMATION
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  color: "#8797C1",
                }}
              >
                Frequently Asked Questions (FAQ)
              </div>
            </div>
          </div>
          {item.qandA.length ? (
            <UncontrolledAccordion
              className="accordion-margin mt-2"
              defaultOpen="0"
            >
              {item.qandA.map((r, index) => {
                return (
                  <AccordionItem key={index + 1}>
                    <AccordionHeader tag="h2" targetId={String(index + 1)}>
                      {r.question}
                    </AccordionHeader>
                    <AccordionBody accordionId={String(index + 1)}>
                      {r.ans}
                    </AccordionBody>
                  </AccordionItem>
                );
              })}
            </UncontrolledAccordion>
          ) : (
            <div className="text-center p-5">
              <h5 className="p-1">
                <Icon.Info size="19" className="me-25" /> No Results Found
              </h5>
            </div>
          )}
        </TabPane>
      );
    });
  };

  return (
    <div id="faq-tabs">
      <Row>
        <Col lg="12" md="12" sm="12" style={{ backgroundColor: "#E7EAF3" }}>
          <div style={{ padding: "5% 10% 10% 10%" }}>
            <TabContent activeTab={activeTab}>{renderTabContent()}</TabContent>
            <div
              className="mt-4"
              style={{ fontWeight: "bold", fontSize: "15px", color: "#8797C1",cursor:"pointer" }}
            >
              View All FAQs →
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Faqs;
