import BasicLayout from './basicLayout'
import BlankLayout from './blankLayout'
function MainLayout(props) {
  let layout=null
  if (props.location.pathname === '/login') {
    layout = <BlankLayout>{props.children}</BlankLayout>
  }else{
    layout = <BasicLayout>{props.children}</BasicLayout>
  }
  return layout;
}

export default MainLayout;
