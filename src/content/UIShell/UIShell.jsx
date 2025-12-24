import React from "react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  Content,
  SideNavMenu,
  SideNavMenuItem,
  Theme,
} from "@carbon/react";
import { Notification, Search, Switcher, Fade } from "@carbon/react/icons";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import ErrorBoundary from "../../components/ErrorBoundary";
import LandingPage from "../LandingPage";
import NotFound from "../../components/NotFound.jsx";

class UIShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: `/${window.location.pathname.split("/")[1] ?? ""}`,
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Theme theme="g100">
            <HeaderContainer
              render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <div>
                  <Header aria-label="IBM Music Player">
                    <SkipToContent />
                    <HeaderMenuButton
                      aria-label="Open menu"
                      onClick={onClickSideNavExpand}
                      isActive={isSideNavExpanded}
                    />
                    <HeaderName href="/" prefix="IBM">
                      Music Player
                    </HeaderName>
                    <ErrorBoundary>
                      <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                      >
                        <SideNavItems>
                          <SideNavMenuItem
                            element={Link}
                            to="/my-library"
                            isActive={this.state.activeItem === "/my-library"}
                            onClick={() =>
                              this.setState({ activeItem: "/my-library" })
                            }
                          >
                            My Library
                          </SideNavMenuItem>
                        </SideNavItems>
                      </SideNav>
                    </ErrorBoundary>
                  </Header>
                </div>
              )}
            />
          </Theme>
          <Content className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default UIShell;
