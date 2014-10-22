/** @jsx React.DOM */
jest.dontMock('../components/DesignerPage.js');

describe('DesignerPage', function() {
  it('should contain a TopBar - test 2', function() {
    var React = require('react/addons');
    var DesignerPage = require('../components/DesignerPage.js');
    var TestUtils = React.addons.TestUtils;

    // Render a DesignerPage into the document
    var page = TestUtils.renderIntoDocument(
      <DesignerPage />
    );

    expect(require('../components/TopBar.js').mock.calls.length).toBe(1);
  });
});
