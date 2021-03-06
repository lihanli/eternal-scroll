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

  def test_button_not_visible
    # button not visible, shouldnt load
    assert_output('0')
  end

  def test_scroller_toggle_on
    # turn off scroller, it shouldnt execute
    page.execute_script('scroller.setOn(false)')
    assert_has_no_css('#load-more')
    scroll_to_button
    assert_output('0')

    # turn scroller back on
    scroll_to_top
    page.execute_script('scroller.setOn(true)')
    assert_has_css('#load-more')
    sleep 0.5
    scroll_to_button
    assert_output('1')
  end

  def test_button_clicking
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
    # dont click on button when it has 'disabled' attribute
    sleep 0.5
    page.execute_script("$('#load-more').button('loading')")
    scroll_to_button
    assert_output('2')
  end
end