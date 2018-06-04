# v4.0.0
This is a breaking change which updated the name of the android java package to
avoid conflicts with other similarly named packages.  To upgrade, you will need
to go into your `MainApplication.java` file and change `import com.reactlibrary.RNUUIDGeneratorPackage;`
to `import io.github.traviskn.rnuuidgenerator.RNUUIDGeneratorPackage;`.
