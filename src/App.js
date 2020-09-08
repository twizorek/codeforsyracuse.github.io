import React from 'react';
import logo from './logo.svg';
import './App.css';
import orangeButton from '../components/orangeButton'
import whiteButton from '../components/whiteButton'


function App() {
  return ( 
 <orangeButton></orangeButton>
 <whiteButton></whiteButton>
    <div className="App">
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">Code for Syracuse</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="#data">Data</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class="container theme-showcase" role="main">

      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <h1>Civic Hacking in the Salt City</h1>
        <p>We are a group of software developers, technologists, activists, and urbanists interested in using technology to make Syracuse and Central New York better.</p>
      </div>

      <div id="data">
        <h1>Central New York Data</h1>
      </div>
      <p>
        Data and APIs for Syracuse, Central New York and NY State:
      </p>
      <ul>
        <li><a href="https://cnyvitals.org/">CNY Vitals</li>
        <li><a href="http://communitygeography.org/maps-data-profiles/">Syracuse Community Geography</a></li>
        <li>Syracuse Newspaper <a href="http://www.syracuse.com/data/">Data sets</a></l1>
        <li><a href="https://syruniv.maps.arcgis.com/apps/OnePane/basicviewer/index.html?appid=e3161b83f9bd4a6c95b744947c707436">MapSyracuse</a></l1>
        <li><a href="http://www.fsihost.com/onondaga/Default.aspx">Onondaga County GIS</a></li>
        <li>New York State <a href="https://data.ny.gov/">Open Data Portal</a> &amp; <a href="https://health.data.ny.gov/">Health Data Portal</a></l1>
        <li>New York State <a href="http://gis.ny.gov/">GIS Clearinghouse</a></li>
        <li>511NY <a href="https://511ny.org/developers/resources">Developer Resource Area</a></li>
      </ul>

      <p>
        Data Sources for Other Upstate Cities:
      </p>
        <ul>
          <li>City of Rochester <a href="http://www.cityofrochester.gov/neighborhooddatamap/">Neighborhood Data Map</a></li>
          <li>City of Albany <a href="https://data.albanyny.gov/">Open Data Portal</a></li>
          <li>City of Buffalo <a href="http://gis.city-buffalo.com/cobapps/publicapps/HTML5/default.html">Property Viewer Mapping Application</a></li>
        </ul>

      <div id="about">
        <h1>About</h1>
      </div>
      <p>
          Code for Syracuse is a group of volunteers that builds digital tools with government and non-profit partners to enhance public life and bridge the digital gap. We’re a platform for civic innovation, driven by civic engagement within the Greater Syracuse community.
      </p>
      <p>
        Code for America <a href="https://www.codeforamerica.org/brigade/">Brigades</a> are local volunteer groups that bring together community members to help make communities work better. Brigades use technology to build new tools to help with local civic issues. Code for America supports Brigade chapters with resources, tools, and access to the wider civic technology movement.
      </p>
      
      <p>
      Check out our <a href="https://www.meetup.com/Code-for-Syracuse/">Meetup Page</a> to see when our next event is and sign up.  We meet the fourth Tuesday of the month.  We look forward to hacking together!
    </p>
    </div> <!-- /container --></div>
    </div>
  );
}

export default App;
