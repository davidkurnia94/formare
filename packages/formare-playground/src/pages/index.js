import React from 'react';
import SEO from '../components/seo';
import MainLayout from '../layouts/main-layout';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Formare Playground" />
    <div className="BgColor-lighter" style={{ height: '100%' }}>
      <div className="Padding-2xlarge">
        <div className="MarginBottom-xlarge">
          <h1 className="Heading-1">Formare CSS Cheatsheet</h1>
          <p className="Heading-5 Color-gray">
            Cupidatat sint deserunt do occaecat dolor ex nulla exercitation.
          </p>
        </div>
        <div className="Grids">
          <div className="Grid Grid-12 Grid-sm-6 Grid-lg-4">
            <div className="Card Card--elevated MarginBottom-2xlarge">
              <div className="Card-block">
                <div className="MarginBottom-large">
                  <h1 className="Heading-2">Button</h1>
                  <p className="Heading-6 Color-gray">
                    An interactive element that typically carries a single action.
                  </p>
                </div>
                <section className="MarginBottom-xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Default</h2>
                  <button className="Button MarginRight">Default</button>
                  <button className="Button Button--primary">Primary</button>
                </section>
                <section className="MarginBottom-xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Filled</h2>
                  <div className="Buttons">
                    <button className="Button Button--primary">Primary</button>
                    <button className="Button Button--secondary">Secondary</button>
                    <button className="Button Button--danger">Danger</button>
                    <button className="Button Button--warning">Warning</button>
                    <button className="Button Button--light">Light</button>
                    <button className="Button Button--dark">Dark</button>
                  </div>
                </section>
                <section className="MarginBottom-xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Sizes</h2>
                  <div className="Buttons">
                    <button className="Button Button--primary Button--small">Small</button>
                    <button className="Button Button--primary">Base</button>
                    <button className="Button Button--primary Button--large">Large</button>
                  </div>
                </section>
                <section className="MarginBottom-2xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Outlined</h2>
                  <div className="Buttons">
                    <button className="Button Button--primary Button--outlined">Primary</button>
                    <button className="Button Button--secondary Button--outlined">Secondary</button>
                    <button className="Button Button--danger Button--outlined">Danger</button>
                    <button className="Button Button--warning Button--outlined">Warning</button>
                    <button className="Button Button--light Button--outlined">Light</button>
                    <button className="Button Button--dark Button--outlined">Dark</button>
                  </div>
                </section>
                <section className="MarginBottom-2xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Modifiers</h2>
                  <button className="Button Button--primary Button--raised MarginRight">
                    Raised
                  </button>
                  <button className="Button Button--primary Button--elevated">Elevated</button>
                </section>

                <section className="MarginBottom-2xlarge">
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Button Group</h2>
                  <div className="ButtonGroup">
                    <button className="Button Button--primary">Button 1</button>
                    <button className="Button Button--primary">Button 2</button>
                    <button className="Button Button--primary">Button 3</button>
                  </div>
                </section>
                <section>
                  <h2 className="Heading-4 FontWeight-medium MarginBottom">Text Buttons</h2>
                  <div className="Buttons">
                    <button className="Button Button--primary Button--text">Primary</button>
                    <button className="Button Button--secondary Button--text">Secondary</button>
                    <button className="Button Button--success Button--text">Success</button>
                    <button className="Button Button--danger Button--text">Danger</button>
                    <button className="Button Button--warning Button--text">Warning</button>
                    <button className="Button Button--light Button--text">Light</button>
                    <button className="Button Button--dark Button--text">Dark</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="Grid Grid-12 Grid-sm-6 Grid-lg-4">
            <div className="Card Card--elevated MarginBottom-2xlarge">
              <div className="Card-block">
                <div className="MarginBottom-large">
                  <h1 className="Heading-2">Typography</h1>
                  <p className="Heading-6 Color-gray">
                    Amet aute aliquip occaecat labore excepteur nisi quis.
                  </p>
                </div>
                <section className="MarginBottom-2xlarge">
                  <div>
                    <h1 className="Heading-1">Heading 1</h1>
                    <h2 className="Heading-2">Heading 2</h2>
                    <h3 className="Heading-3">Heading 3</h3>
                    <h4 className="Heading-4">Heading 4</h4>
                    <h5 className="Heading-5">Heading 5</h5>
                    <h6 className="Heading-6">Heading 6</h6>
                  </div>
                </section>
              </div>
            </div>
            <div className="Card Card--elevated MarginBottom-2xlarge">
              <div className="Card-block">
                <div className="MarginBottom-large">
                  <h1 className="Heading-2">Inputs</h1>
                  <p className="Heading-6 Color-gray">Officia enim non amet laborum.</p>
                </div>
                <section className="MarginBottom">
                  <h2 className="Heading-4 MarginBottom-2xsmall FontWeight-medium">Basic Input</h2>
                  <input className="Input" type="text" placeholder="A standard input" />
                </section>
                <section className="MarginBottom">
                  <h2 className="Heading-4 MarginBottom-2xsmall FontWeight-medium">With Addon</h2>
                  <div className="InputGroup">
                    <div className="InputGroup-addon Color-gray">Rp</div>
                    <input type="text" className="Input" />
                    <div className="InputGroup-addon Color-gray">,00</div>
                  </div>
                </section>
                <section className="MarginBottom">
                  <h2 className="Heading-4 MarginBottom-2xsmall FontWeight-medium">With Button</h2>
                  <div className="InputGroup">
                    <input type="text" className="Input" placeholder="e.g Jakarta, Hanoi" />
                    <button className="Button Button--primary">Search</button>
                  </div>
                </section>
                <section>
                  <h2 className="Heading-4 FontWeight-medium MarginBottom-2xsmall">Textarea</h2>
                  <textarea className="Textarea"></textarea>
                </section>
              </div>
            </div>
            <div className="Card Card--elevated">
              <div className="Card-block">
                <div className="MarginBottom-2xlarge">
                  <h1 className="Heading-2">Select</h1>
                  <p className="Heading-6 Color-gray">
                    Laborum irure qui in ullamco reprehenderit do nostrud.
                  </p>
                </div>
                <div>
                  <div className="Select">
                    <select>
                      <option>Jakarta</option>
                    </select>
                    <span className="Select-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Grid-12 Grid-sm-6 Grid-lg-4">
            <div className="Card Card--elevated">
              <div className="Card-block">
                <div className="MarginBottom-2xlarge">
                  <h2 className="Heading-2">Form</h2>
                  <p className="Heading-6 Color-gray">
                    Culpa pariatur anim eu adipisicing sint minim id pariatur cupidatat.
                  </p>
                </div>
                <form className="Form">
                  <div className="FormField MarginBottom">
                    <label className="FormField-label">Full Name</label>
                    <input type="text" className="Input" placeholder="e.g John Doe" />
                  </div>
                  <div className="FormField MarginBottom">
                    <label className="FormField-label">Password</label>
                    <input type="password" className="Input" placeholder="Your password" />
                    <span className="FormField-helper Colo">
                      Password should be at least 8 characters
                    </span>
                  </div>
                  <div className="FormField MarginBottom">
                    <label className="FormField-label">Location</label>
                    <div className="Select">
                      <select>
                        <option>Jakarta</option>
                        <option>Surabaya</option>
                        <option>Semarang</option>
                      </select>
                      <div className="Select-arrow"></div>
                    </div>
                  </div>
                  <div className="FormField MarginBottom-2xlarge">
                    <div className="FormField-label">Address</div>
                    <textarea className="Textarea" placeholder="Jl Wedelia"></textarea>
                  </div>
                  <div className="Flex JustifyContent-end">
                    <button
                      type="button"
                      className="Button Button--fullWidth Button--elevated Button--primary">
                      Accept
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default IndexPage;
