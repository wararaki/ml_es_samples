FROM python:3.8

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt && \
    rm -rf ~/.cache requirements.txt

WORKDIR /server
COPY app /server/app
COPY run.sh /server/run.sh

ENTRYPOINT [ "/bin/bash", "run.sh" ]
