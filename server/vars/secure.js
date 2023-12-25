const CREDENTIALS = JSON.parse(JSON.stringify(
    {
        "type": "service_account",
        "project_id": "ace-momentum-409009",
        "private_key_id": "d0dbe117826063148a7f67dc5f61d19f9fc074b8",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbrWwU8KyjB2Jv\n3alV7X3dr9darzZJeKZyyzFlnEh1y3sYEQ1UiceQocS6uKmkOl3h2fTCceghAUSd\n1uLdKvfKrjDgEM2npL0GCV25ymqnGUKH2RywNmJu751vzTVk9m0ZbJphKFKsofEC\n2N2LB1+peWhN7BMLy0ZR6h0f9mbTfY67PvyVVNIczj4N6+Vss3e3hDvo5xaBRyYV\nwf3PLOPuP9lmquCdG0tOOLT/gO2lrjmLeicoy2LppB3vMSdR7hK0U1JSVeGoPq4S\nJ/9utFD+RKpaWOCwoLwa6A59Ck7hWpNzB0V8NmN4Mvo90pm7VgP/mAA83MQs9HGg\nUVHUd6zDAgMBAAECggEAQVJCmsFsHDgkaa4oXbA2ZpaUe1cxVcyF9gl8oUHE/B3q\n9t+PLq2fhV7M8FbbvsVKSE+2q6ESTMojPKn6oJhXwVFloCLu/CQMvwBG+el6KEDn\nGx0Qnkc1otYmYunKsEBkdZRpHW3Pk5y93UJeMiqZo/vBa7ZAfZfOy6nJSklLDySw\nIIdNQxZzmpjUz+0t3o8Tf/ToNQgRYgjjVi2B/60QRpnk9KKhd2jj/4YFu62s+Tq0\nZA324eBwS00fjyfW9RR7zw3MKKMd1kqaQSGHZ19TVJmqgVu8XI3JroicunzMcDU6\nRaBEvfZWrpTuJdsPiOr56X4cA80CifjLo8vGIC3hxQKBgQDxLhGYgp7Xz1yAz3s3\nPdTFnyaISo7HvL/ZdkeUB2K2R97qZqTiC18gS3yaSDcmXiRvVI876CE5gehi8KFa\nIMj0NQlpRwwrkgsvE5rqc7zMchLO1kCSYp2WCO8t+DSgykEjdp7EnleoKxIwfLbq\n4F+oTh+Ea9LA9CO5d0upPFxrFwKBgQDpLRqA0UZGRV9ohA7NVV4UrbYCrPFUrzRH\nC6xorK53nRAC4BtabTXkqJqntx5d0DPqCNshKtqKrBWS27s1xGM8tFORzEz+6tng\nnblQASa1W5Us8WvddRJ0052FgB5H0/0degvfSHxgNoS6gWmXWqt+qdF6RjDzn1ef\n3pJH1kMnNQKBgBTMuE/C1BgglgW13xaAip0QgK44X9/x80m53apyiJzXze3BNG8a\nM/YBDJnxqG/yponDbSbpehQPlA8UWZYARdRpzon5yp7nVXeV5UJbAOlQ3TZhW+hE\nAPszgg0g3skPKFb6n+6tCTpDnKn513yiJR3KvwUYl3B0nbAdDbVms0G5AoGAX64O\nTgWRnIwi1jQ6Dq+U509QfFCSxnkOLojvuhQBkztzsnpbPwPJNYapz2Aoqb4hT0tK\n/5UiD/0E7ToU2782KValZBI9Fe0wcibGP7n5NDncQJDf/gNoC2A6JumngznNhybp\ncDnCL4ivdghcV6rw7Ayq1E2xEIa14ffmdmvJKnECgYEAqI4Z5yzaoy5PD6qzFM0u\nVcnsDFLPhEyQwBoQ0cFl/QF7t6R/MTqlApAjiBgoUC3Gbf7CvNqMBPzGsrO5Oxmn\nMy02ygpeYxYjqHP4srv2R93n+l4ljFQlLNjYHtgo9gGy0jFu3LvKVVZN9/obAD2X\ntwg/vXG25p0YuRkUd7f3zj8=\n-----END PRIVATE KEY-----\n",
        "client_email": "lakshay@ace-momentum-409009.iam.gserviceaccount.com",
        "client_id": "108640519274357585724",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/lakshay%40ace-momentum-409009.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      }
      
));

const CONFIG = {
    credentials:{
        private_key:CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email,
    }
}

module.exports={CONFIG};