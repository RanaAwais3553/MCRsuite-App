package com.mcrsuitapp;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; 
import android.os.Bundle; 
// import org.devio.rn.splashscreen.SplashScreen; // here
// import android.os.Bundle;
// react-native-splash-screen < 0.3.1
// import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
@Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
  @Override
  protected String getMainComponentName() {
    return "MCRSuitApp";
  }
}
