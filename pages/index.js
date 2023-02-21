import { useAppDataContext } from '../contexts/app-data-context';
import MainContainer from '../components/common/main-container';
// import { useRouter } from 'next/router';
import { useRef } from 'react';
import Image from 'next/image';
import ScrollAnimation from '../components/common/scroll-animation';

const TOOLS_ITEMS = [
  {
    title: "Innovative studio",
    description: "Maximize your content creation potential with our innovative tools, including advanced upload methods, customizable templates and more. Effortlessly create any media format you desire with ease.",
    background: "tool-bg1.webp"
  },
  {
    title: "AI powered",
    description: "Expand your reach with AI-powered tools to tailor your content to a global audience. Maximize your exposure through our discovery features to attract new subscribers and grow your presence on the platform.",
    background: "tool-bg2.webp"
  },
  {
    title: "Smart dashboard",
    description: "Maximize your monetization and growth with AI-powered insights. Optimize your content with tailored suggestions, driven by powerful analytics. Better understand your audience's behavior and reach your full potential.",
    background: "tool-bg3.webp"
  },
];

export default function Home() {
  const { t, isMobile } = useAppDataContext();
  // const { push, locale } = useRouter();
  const firstInputRef = useRef();

  return (
    <MainContainer>
      <section className='f-row jc-sb c-primary index-row-1 b-marg-l'>
        <div className='f1 padd-s-m'>
          <h1 className='fs-xl fw-l'>Unleash your culinary creativity & get paid.</h1>
          <h2 className='fs-l fw-l' style={{ marginTop: "-.5em" }}>For amateur chefs and pros.</h2>
          <div>
            <p className="fs-xm">Unlock a world flavors</p>
            <div className='f-row jc-c f-wrap'>
              <input ref={firstInputRef} type="text" className='fs-xm padd-xs-s b-accent br-s c-primary f1 marg-xs' placeholder='Enter email address' />
              <button
                className='accent-hover-effect fs-xm padd-xs-s br-s b-accent marg-xs'
                onClick={() => { }}
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
        <div className='f1 f-row jc-c ai-c'>
          <Image
            alt="Demo with phone image"
            src="/demo-phone.webp"
            width={!isMobile ? "571" : "320"}
            height={!isMobile ? "609" : "341"}
          />
        </div>
      </section>

      <section className='f-col c-primary index-row-2 b-marg-l'>
        <div className='f-row jc-sa ai-c f-wrap'>
          <ScrollAnimation.ScaleIn>
            <Image
              className='sticker1'
              alt="Presentation first sticker image"
              src="/sticker1.webp"
              width={!isMobile ? "655" : "450"}
              height={!isMobile ? "640" : "440"}
            />
          </ScrollAnimation.ScaleIn>
          <div className={`padd-s-m ${!isMobile ? "lhw" : "lfw"}`}>
            <ScrollAnimation.FadeUp>
              <div className='spacer-m'></div>
              <h2 className='fs-xl fw-l'>What is SNAXX ?</h2>
              <p className='fs-xm'>Snaxx is the ultimate destination for food enthusiasts looking to display their creativity and get paid for it. With its user-friendly tools and supportive community, Snaxx provides an outlet to showcase your culinary creations, food journey, daily food routines, food critic, diets, family recipes, and so much more. Whether you're a seasoned chef or just enjoy cooking for fun, Snaxx is the perfect place for you to share your passion and get rewarded for it.</p>
            </ScrollAnimation.FadeUp>
          </div>
        </div>

        <div className='f-row jc-c ai-c f-wrap'>
        <ScrollAnimation.ScaleIn>
          <Image
            className='arrow-img'
            alt="Accent colored arrow image"
            src="/arrow-accent.webp"
            width={!isMobile ? "347" : "280"}
            height={!isMobile ? "347" : "280"}
          />
          </ScrollAnimation.ScaleIn>
        </div>

        <div className='f-row jc-sa ai-c f-wrap'>
          <div className={`f-col ${!isMobile ? "lhw" : "lfw"}`}>
            <div className="padd-s-m">
              <ScrollAnimation.FadeUp>
                <h2 className='fs-xl fw-l'>Empowering creators</h2>
                <p className='fs-xm'>Our tools and features make it simple to grow your audience and connect with people from around the world through shared love of food. Whether you're an athlete, lifestyle creator, artist, fitness guru or anything in between, everyone can showcase their unique cooking style on Snaxx.</p>
              </ScrollAnimation.FadeUp>
            </div>
            <div className='padd-s-m'>
              <ScrollAnimation.FadeUp>
                <h2 className='fs-xl fw-l'>Directly monetize</h2>
                <p className='fs-xm'>Strengthen your bond with your audience by offering unique subscriber-only content. Effortlessly monetize your creativity with our paywall system, and turn it into a growing source of recurring income.</p>
              </ScrollAnimation.FadeUp>
            </div>
          </div>
          <ScrollAnimation.ScaleIn>
            <Image
              className='sticker2'
              alt="Presentation second sticker image"
              src="/sticker2.webp"
              width={!isMobile ? "720" : "500"}
              height={!isMobile ? "767" : "533"}
            />
          </ScrollAnimation.ScaleIn>
        </div>
      </section>

      <section className='f-col ai-c padd-s-m'>
        <div className='f-row f-wrap blue-banner b-marg-l'>
          <div className='c-white f1 padd-s-m bg-bubbles'>
            <div className='marg-xl-m'>
              <h2 className='fs-xl fw-l'>Community focus</h2>
              <p className='fs-xm'>Elevate your connection with your community through interactive features like private messages, recipe suggestions, cooking classes, and more.</p>
            </div>
          </div>
          <div className='f1 padd-s-m'>
            <div className='marg-xl-m'>
              <h3 className='fs-xxm fw-l c-white'>Become an early Ambassador and get 90% of subscription revenues.</h3>
              <div className='f-row jc-c f-wrap'>
                <input ref={firstInputRef} type="text" className='fs-xm padd-xs-s b-blue br-s c-primary f1 marg-xs' placeholder='Enter email address' />
                <button
                  className='secondary-hover-effect fs-xm padd-xs-s br-s b-secondary marg-xs'
                  onClick={() => { }}
                >
                  Get early access
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='f-col jc-c ai-c c-primary b-marg-l'>
          <h2 className='fs-xl fw-l txt-c'>Leverage our tools</h2>
          <p className={`fs-xm txt-c ${!isMobile ? "hw" : "lfw"}`}>Maximize your income, optimize your content, and gain valuable data insights through free tools.</p>
        </div>
        <div className='f-row jc-c f-wrap tool-container b-marg-l'>
          {
            TOOLS_ITEMS.map((itm, i) => {
              return <ScrollAnimation.FadeIn key={`i-t-i-${i}`} className='c-primary tool-item f-col jc-c padd-s-m' style={{ backgroundImage: `url(/${itm.background})` }} animStyle={ { transition: `.75s ease-in-out ${0.25 * (i + 1)}s`}}>
                <h3 className='fs-xl fw-l tool-marg'>{itm.title}</h3>
                <p className='fs-xm tool-marg'>{itm.description}</p>
              </ScrollAnimation.FadeIn>;
            })
          }
        </div>
      </section>
      <section className='f-row jc-c f-wrap bg-secondary'>
        <div className=''>
          <Image
            className='ambassador-img'
            alt="Ambassador section image"
            src="/ambassador-img.webp"
            width="594"
            height="384"
          />
        </div>
        <div className='f1 bg-bubbles2 f-row jc-c'>
          <div className='ambassador-bloc f-col jc-c ai-c'>
            <h2 className='fs-xl fw-l c-primary fw'>Ambassadors program</h2>
            <p className='fs-xm c-primary'>Join our Ambassadors program and be part of the Snaxx journey from the start. Take advantage of early adoption and reap the benefits and rewards along the way.</p>
          </div>
        </div>
      </section>
    </MainContainer >
  )
};
