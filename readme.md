Result:

## Q1 - Advanced use of Javascript

Hash: 1a3f4b2c

[
{ id: 3, title: 'Dolor' },
{ id: 6, title: 'Et' },
{ id: 1, title: 'Lorem' },
{ id: 4, title: 'Sit' }
]
{ name: 'Apple' }

## Q2 - Implement an Express.js middleware

Hash: 5b8e2d7a

Too many requests for the global namespace. Please retry in 1.9913333333333334 minutes.

## Q3 - Functional programming

Hash: 7c9d6e4f

The list is [
'bootstrap',
'bootstrap-css',
'bootstrap-js',
'bootstrap-datepicker',
'bootstrap-select',
'fliplet-core',
'moment',
'moment-timezone',
'jquery',
'jquery-ui'
]

## Q4 - Library migration assessment plan

Hash: 9e5f4d6b

Research and Familiarization:
Begin by thoroughly understanding the changes and improvements introduced in Sequelize V4 compared to V3. Study the documentation, release notes, and any migration guides provided by the Sequelize project.

Risk Assessment:
Evaluate the potential risks associated with the library migration, such as compatibility issues with existing codebase, performance impact, and any breaking changes that could affect critical functionality. Identify the potential impact on the project's timelines and resources.

Development Environment Setup:
Set up a separate development environment to conduct the migration process without affecting the production system. This environment should replicate the existing database, server configurations, and dependencies.

Dependency and Compatibility Analysis:
Identify all the external dependencies used by Sequelize V3 and assess their compatibility with V4. Check for any deprecated features or breaking changes in the dependencies that might require updates or replacements.

Codebase Analysis:
Analyze the existing codebase to identify Sequelize-specific code and any potential areas where changes might be required. This includes models, migrations, associations, and query logic. Make note of any deprecated methods or changes in behavior.

Plan Development Tasks:
Create a detailed plan comprising development tasks with priorities, sizes, and possible complications. This plan should include the following areas:

a. Dependency Upgrade: Update all the external dependencies, including Sequelize, to their latest compatible versions.
b. Codebase Update: Modify the Sequelize-specific code to align with the new API and syntax introduced in Sequelize V4. Update models, associations, queries, and any other areas that require changes.
c. Testing: Create a comprehensive test suite to validate the migration process. Cover different scenarios, edge cases, and critical functionalities. Automate tests wherever possible to ensure consistent results.
d. Performance Optimization: Evaluate the performance of the application after the migration. Identify any areas where optimizations can be applied to improve the overall system performance.

Rollout and Deployment Strategy:
Plan the deployment strategy to minimize downtime and user impact. Consider deploying the upgraded library version in a phased manner, starting with non-critical environments or a small subset of users, followed by gradual expansion.

Monitoring and Error Tracking:
Implement monitoring tools and error tracking mechanisms to detect any issues or performance regressions introduced by the migration. Set up appropriate alerts and logs to capture any unexpected behavior.

Effort Required:
The effort required for the library migration depends on various factors such as the size and complexity of the codebase, the number of Sequelize-specific features used, and the number of external dependencies that need to be updated. It is essential to conduct a thorough analysis of the existing system to estimate the effort accurately.

Development Tasks:
Here is a high-level list of development tasks:

- Update dependencies and ensure compatibility with Sequelize V4.
- Modify Sequelize-specific code to align with V4 API and syntax.
- Update models, associations, and queries to reflect the changes in Sequelize V4.
- Create a comprehensive test suite and automate tests where possible.
- Optimize performance and conduct performance testing post-migration.
- Gradually deploy the upgraded library version, starting with non-critical environments.
- Monitor the system for any errors, performance issues, or regressions.

Rollout and Deployment Strategy:

- Conduct a trial migration in the development environment and perform extensive testing.
- Once testing is successful, deploy the upgraded library version to a staging environment and perform integration and user acceptance testing.
- Gradually roll out the upgraded library version to a subset of production servers or users.
- Monitor the system for any issues, and if no critical problems are identified, continue rolling out to the remaining servers or users.
- Communicate the migration plan and any potential downtime or disruptions to the stakeholders, providing them with relevant updates and support.

Monitoring and Error Tracking:
Implement monitoring and error tracking mechanisms such as log aggregation, performance monitoring, and exception tracking. Use tools like centralized logging systems, performance monitoring tools, and error tracking platforms to identify and address any issues that arise during or after the migration. Set up appropriate alerts and notifications to ensure prompt action in case of any errors or performance regressions.

Time spent on question: 45 minutes

Q5 - Open-ended questions

## Q5.1

Hash: 2f1e3d4c

Create a "www" Folder:
Start by creating a folder for our Cordova project called "www" (short for web) or any other name you prefer. This folder will hold the app's static content files, such as HTML, CSS, JavaScript, and media files.

Content Management System (CMS):
We will set up a backend Content Management System (CMS) that will serve as the central repository for our app's content. This CMS can be built using a web framework of our choice, such as Node.js with Express.

Versioning System:
Implement a versioning system within our CMS to track the different versions of our app's content. This can be achieved by assigning a unique version number or a timestamp to each content update.

API Development:
Develop an API in our CMS that allows the mobile app to communicate with the backend and retrieve the latest content version. This API should include endpoints for fetching the current content version, downloading content updates, and any other required functionalities.

App Initialization:
In the Cordova app's initialization code, include logic to retrieve the current content version from the CMS API. This can be done by making an HTTP request to the appropriate endpoint.

Check for Updates:
Compare the current content version obtained from the CMS API with the version currently stored in the app. If a newer version is available, proceed with the content update process.

Content Update Process:
When an update is available, make a request to the CMS API to download the updated content package. The package can be a ZIP file containing the new HTML, CSS, JavaScript, and media files.

Folder for Updates:
Create a separate folder within your Cordova project, let's call it "updates" or any name you prefer, to store the downloaded update packages.

Update Extraction:
Extract the contents of the downloaded update package from the "updates" folder to the "www" folder. This process may involve unzipping the package and overwriting the existing files in the "www" folder with the updated versions.

App Restart:
To ensure the changes take effect, restart the Cordova app programmatically. This can be done by reloading the main webview or by using Cordova's restart functionality.

Error Handling:
Implement error handling mechanisms throughout the content update process. This includes checking for network connectivity, validating the integrity of the downloaded update package, and handling any errors that may occur during the extraction or restart process.

Periodic Update Checks:
Set up a periodic check within the app to query the CMS API for content updates. We can schedule these checks to occur at specific intervals (e.g., daily, weekly) or trigger them based on user actions within the app.

By following these steps, we can create a Cordova-powered hybrid mobile app that is capable of self-updating its content without the need for app store approval.

Time spent on question: 40 minutes

## Q5.2

Hash: 3b8a2c4d

To implement asset resizing and compression on the backend while ensuring scalability and handling poor/weak connections, here's an approach we can follow:

Load-Balancing and Horizontal Scaling:

- Employ a load balancer to distribute incoming requests across multiple backend servers.
- Horizontal scaling involves adding more servers to the system to handle increased load. This can be achieved by using containerization technologies like Docker and orchestrators like Kubernetes.

Asynchronous Processing:

- Utilize a message queue system like RabbitMQ or Apache Kafka to decouple the asset resizing and compression tasks from the HTTP request-response cycle.
- When a request to download an asset is received, enqueue a message with the necessary details for resizing and compression.

Background Workers:

- Implement worker processes that consume messages from the message queue and perform the resizing and compression tasks.
- These workers can be horizontally scaled to handle a higher number of concurrent tasks.

Distributed File Storage:

- Store the original and processed assets in a distributed file storage system like Amazon S3, Google Cloud Storage, or a distributed file system like GlusterFS or Ceph.
- This allows easy access to the files from any backend server and provides fault tolerance and scalability.

Dynamic Generation of Assets:

- Instead of pre-generating assets for all possible device screen sizes, generate them dynamically on-demand.
- When a worker receives a message from the queue, it can determine the target device's screen size and generate the appropriate resized or compressed asset.

Caching:

- Implement a caching layer using tools like Redis or Varnish to cache frequently accessed assets.
- Caching reduces the load on the backend by serving the assets directly from the cache if available.

Progressive Downloads:

- Enable progressive downloads to handle poor or weak connections effectively.
- Stream the asset data in small chunks instead of waiting for the entire asset to be downloaded.
- This allows users to start viewing the asset while it is being downloaded gradually.

Data Integrity and Error Handling:

- Implement checksum verification mechanisms like MD5 or SHA-256 to ensure the downloaded files are not corrupted.
- Calculate the checksum of the original file on the server and compare it with the checksum of the downloaded file on the client side.
- If a checksum mismatch occurs, initiate a retry mechanism or send an error response to the client.

By following these guidelines, we can build a scalable backend system that efficiently handles asset resizing and compression while considering poor network conditions and ensuring the integrity of downloaded files.

Time spent on question: 35 minutes

## Q5.3

Hash: 4c2d3e1f

To automate the process of building and signing .ipa/.apk files for iOS and Android, we can follow the steps outlined below. This approach utilises popular tools and libraries to ensure scalability and reduce maintenance and development costs.

Version Control:

- Use a version control system like Git to manage your source code and configurations. This allows for collaboration and tracking changes.

Continuous Integration/Continuous Deployment (CI/CD) System:

- Set up a CI/CD system to automate the build and deployment process. Popular options include Jenkins, CircleCI, Travis CI, or GitLab CI/CD.

Build Environment:

- Set up a scalable build environment, such as using virtual machines or containers, to ensure consistent and reproducible builds across different machines.

Dependency Management:

- Utilise dependency management tools like Cocoapods for iOS and Gradle for Android to manage external libraries and dependencies. These tools handle downloading and resolving dependencies automatically, reducing maintenance efforts.

Build Automation:

- Use build automation tools specific to each platform:
  - For iOS (ipa): Use Fastlane (https://fastlane.tools/) as a powerful automation tool for iOS app development. Fastlane provides various actions to handle building, testing, and code signing, making it easy to automate the entire process. It integrates well with CI/CD systems and supports multiple lanes for different build configurations.
  - For Android (apk): Use Gradle as the build system for Android projects. Gradle provides a rich set of features and plugins for customising the build process. You can define build flavours, product flavours, and signing configurations in Gradle files to automate the build and signing of the APK.

Code Signing:

- Generate and store your signing certificates securely, such as using a key management system or a secure file storage solution.
- Use Fastlane's match (iOS) or Gradle's signing configurations (Android) to automate the code signing process. These tools handle managing certificates and signing identities, ensuring secure and reproducible builds.

Cloud Infrastructure:

- Utilise cloud-based infrastructure for scalability and ease of management. You can use cloud providers like Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure to set up virtual machines or containers for building and signing the apps.

Artefact Storage:

- Store the built artefacts (ipa and apk files) in a secure and accessible location, such as a cloud storage service or an artefact repository like JFrog Artifactory or Nexus Repository. This ensures easy distribution and traceability of the built files.

Notifications and Feedback:

- Configure your CI/CD system to provide notifications and feedback on build status, errors, or failures. This helps the development team stay informed and quickly address any issues.

By following this approach, you can automate the process of building and signing .ipa/.apk files for iOS and Android, ensuring scalability and utilising popular tools and libraries that reduce maintenance and development costs.

Time spent on question: 30 minutes

Run npm i to install dependices and start project bu running npm tun dev
