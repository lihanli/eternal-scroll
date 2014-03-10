require 'test_helper'

class EternalScrollTest < CapybaraTestCase
  def setup
    super
    visit "file://#{Dir.pwd}/test/test.html"
  end

  def test
  end
end