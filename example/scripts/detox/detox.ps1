echo "Running detox - Windows"

cd android "&&" .\\gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug "&&" cd ..