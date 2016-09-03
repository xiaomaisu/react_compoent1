import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Switch from './index'
import styles from './css/index.css'

describe('<Switch />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Switch />)
  });

  it('css id right', () => {
    expect(wrapper).to.have.html('<span class="switch"></span>')
  });

  it('inital state is right', () => {
    expect(wrapper).to.have.state('checked').equal(false)
  })

  it('simulates click events', () => {
    wrapper.simulate('click');
    expect(wrapper).to.have.className('switch-checked');
  });
})
