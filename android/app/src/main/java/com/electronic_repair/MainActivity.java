package com.electronic_repair;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.view.View;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      hideNavigationBar();
  }

  @Override
  protected String getMainComponentName() {
    SplashScreen.show(this);
    return "electronic_repair";
  }

  private void hideNavigationBar() {
          getWindow().getDecorView().setSystemUiVisibility(
              View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
              | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

  }
}
