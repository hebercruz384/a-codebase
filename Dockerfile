FROM openjdk

COPY . /usr/src/myapp
WORKDIR /usr/src/myapp

RUN find -name "*.java" > sources.txt

RUN javac @sources.txt

CMD ["java", "Main"]
