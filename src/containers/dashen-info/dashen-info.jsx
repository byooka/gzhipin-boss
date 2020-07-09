/* 大神信息完善的路由组件 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

class DashenInfon extends Component {
  state = {
    header: '',
    info: '',
    post: ''
  }

  setHeader = (header) => {
    this.setState({
      header
    })
  }

  handlerChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    console.log(this.state);
    this.props.updateUser(this.state)
  }

  render() {
    const {header, type} = this.props.user
    if (header) {
      const path = type === 'dashen' ? '/dashen' : '/laoban'
      return <Redirect to={path} />
    }
    return(
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem onChange={val => {this.handlerChange('post', val)}}>求职岗位：</InputItem>
        <TextareaItem title="个人介绍：" rows={3} onChange={val => {this.handlerChange('info', val)}}></TextareaItem>
        <Button type="primary" onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(DashenInfon)