import React from 'react'
import SideMenu from 'react-sidemenu';
import 'react-sidemenu/dist/side-menu.css';

class Menu extends React.Component{
    
 
  render(){
    const items = [
        
        {label: 'Main Menu', value: 'item1', icon: 'fa-search',
        children: [
          {label: 'Dashboard', value: 'item1.1', icon: 'fa-snapchat'},
          {label: 'Health Plan', value: 'item1.2',
          children: [
            {label: 'Claim', value: 'item2.1.1'},
            {label: 'Usage', value: 'item2.1.2'},
            {label: 'Plan', value: 'item2.1.1'},
            {label: 'ID Card', value: 'item2.1.2'},
            {label: 'Help Request', value: 'item2.1.1'},
            {label: 'Payments', value: 'item2.1.2'},
            {label: 'Documents', value: 'item2.1.1'}]},
          {label: 'Pharmacy', value: 'item1.2'},
          {label: 'Care Page    ', value: 'item1.2'},
          {label: 'Thrive', value: 'item1.2'}]},
        {label: 'Find Care', value: 'item2', icon: 'fa-automobile',
        children: [
          {label: 'item 2.1', value: 'item2.1',
          children: [
            {label: 'item 2.1.1', value: 'item2.1.1'},
            {label: 'item 2.1.2', value: 'item2.1.2'}]},
          {label: 'item 2.2', value: 'item2.2'}]},
        {label: 'Appointments', value: 'item3', icon: 'fa-beer'},
        {label: 'Patient Profile', value: 'item3', icon: 'fa-beer'},
        {label: 'Settings', value: 'item3', icon: 'fa-beer',
        children: [
            {label: 'Preference', value: 'item2.1.1'},
            {label: 'Link App & Devices', value: 'item2.1.2'},
            {label: 'Login Settings', value: 'item2.1.2'},
            {label: 'Grant/ Access family Account', value: 'item2.1.2'},
            {label: 'Whats New', value: 'item2.1.2'}]},

      ];
      
    return (
    <SideMenu items={items}/>
    );
  }
}


export default Menu;

