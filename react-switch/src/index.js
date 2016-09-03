import React, {Component, PropTypes as t} from 'react'
import './css/index.css'
import classNames from 'classnames' 
function noop(){}
class Switch extends Component {
  static propTypes = {
    disabled      : t.bool,
    className     : t.string,
    defaultChecked: t.bool,
    checked       : t.bool,
    onChange      : t.func
  }
  static defaultProps = {
    disabled:     false,
    checked :     false,
    onChange:     noop
  }
  constructor(props) {
    super(props);
    var checked = false;
    if('checked' in props){
      checked = !!props.checked;
    }else {
      checked = !!props.defaultChecked;
    }
    this.state  = {
      checked :checked
    }
  }
  setChecked(checked) {
    if(!this.props.checked) {
        this.setState({
          checked: checked
        });
    }
    this.props.onChange(checked);
  }
  toggle() {
    var checked = !this.state.checked;
    // this.setState({
    //     checked: checked
    // }); 
    this.setChecked(checked);
  }

  render() {
    let parentProps     = this.props;
    var className       = parentProps.className;
    var switchClassName = classNames({
        [`${className}`]      :className?true:false,
        'switch'              :true,
        'switch-checked'      :this.state.checked?true:false,
        'switch-disabled'     :parentProps.disabled?true:false
    })
    return (<span className={switchClassName} onClick={parentProps.disabled?noop:this.toggle.bind(this)}></span>)
  }
}

export default Switch
