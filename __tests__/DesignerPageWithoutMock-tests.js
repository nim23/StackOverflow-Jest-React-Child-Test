/** @jsx React.DOM */
jest.dontMock('../components/DesignerPage.js');
jest.dontMock('../components/TopBar.js');

describe('DesignerPage', function() {
  it('should contain a TopBar - test 1', function() {
    var React = require('react/addons');
    var DesignerPage = require('../components/DesignerPage.js');
    var TopBar = require('../components/TopBar.js');
    var TestUtils = React.addons.TestUtils;

    // Render a DesignerPage into the document
    var page = TestUtils.renderIntoDocument(
      <DesignerPage />
    );

    var topbar = TestUtils.scryRenderedComponentsWithType(page, TopBar);
    expect(topbar.length).toBe(1);
  });
});
