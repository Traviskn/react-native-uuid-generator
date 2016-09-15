#import "RNUuidGenerator.h"

@implementation RNUUIDGenerator

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getRandomUUID:(RCTPromiseResolveBlock)resolve
                  reject:(__unused RCTPromiseRejectBlock)reject)
{
  NSString *uuid = [[NSUUID UUID] UUIDString];

  resolve(@[uuid]);
}

@end

