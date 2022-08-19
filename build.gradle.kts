plugins {
    kotlin("js") version "1.7.10"
}

group = "me.matias"
version = "1.0"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    testImplementation(kotlin("script-runtime"))
}

kotlin {
    js(LEGACY) {
        binaries.executable()
        nodejs {

        }
    }
}