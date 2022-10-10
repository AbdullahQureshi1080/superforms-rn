echo "Running detox - Linux"

cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..