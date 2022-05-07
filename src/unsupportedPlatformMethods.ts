import type {LocationAccuracy, LocationAccuracyOptions, PermissionStatus} from './types';

const IOS_14 = 'Only supported by iOS 14 and above';
const SCOPED_ANDROID_ONLY = "Only supported for Android OS 11 and above"

export async function checkLocationAccuracy(): Promise<LocationAccuracy> {
  throw new Error(IOS_14);
}

export async function requestLocationAccuracy(
  _options: LocationAccuracyOptions,
): Promise<LocationAccuracy> {
  throw new Error(IOS_14);
}

export async function openLimitedPhotoLibraryPicker(): Promise<void> {
  throw new Error(IOS_14);
}

export async function openFileSettings(): Promise<PermissionStatus> {
  throw new Error(SCOPED_ANDROID_ONLY);
}