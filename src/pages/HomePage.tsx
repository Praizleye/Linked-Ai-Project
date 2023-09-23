import {
  LandingPageScene,
  IntroScene,
  RulesGuidelinesScene,
  JudgingCriteriaScene,
  FaqScene,
  TimelineScene,
  PrizesAndRewardsScene,
  PartnersAndSponsors,
  PrivacyPolicy,
  Footer,
} from "../scenes/index";

export default function HomePage() {
  return (
    <div>
      <LandingPageScene />
      <IntroScene />
      <RulesGuidelinesScene />
      <JudgingCriteriaScene />
      <FaqScene />
      <TimelineScene />
      <PrizesAndRewardsScene />
      <PartnersAndSponsors />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
