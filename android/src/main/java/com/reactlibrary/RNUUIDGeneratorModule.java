package com.reactlibrary;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.UUID;

public class RNUUIDGeneratorModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNUUIDGeneratorModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNUuidGenerator";
  }

  @Override
  public String getRandomUUID(Callback callback) {
    String uuid = UUID.randomUUID().toString();

    callback.invoke(uuid);
  }
}
