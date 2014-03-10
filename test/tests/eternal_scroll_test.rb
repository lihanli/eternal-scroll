require 'test_helper'

class EternalScrollTest < CapybaraTestCase
  def setup
    super
    visit "file://#{Dir.pwd}/test/test.html"
  end

  def assert_output(output)
    assert_text(output, find('#output'))
  end

  def scroll_to_top
    scroll_to('#output')
  end

  def scroll_to_button
    scroll_to('#load-more')
  end

  def test
    # button not visible, shouldnt load
    assert_output('0')

    # turn off scroller, it shouldnt execute
    page.execute_script('scroller.setOn(false)')
    assert_has_no_css('#load-more')
    scroll_to_button
    assert_output('0')

    # turn scroller back on
    page.execute_script('scroller.setOn(true)')
    assert_has_css('#load-more')
    scroll_to_button
    assert_output('1')

    # test that it wont click on invisible button
    scroll_to_top
    scroll_to_button
    assert_output('1')

    # when button is visible again then it will click again
    sleep 0.5
    scroll_to_button
    assert_output('2')
  end
end