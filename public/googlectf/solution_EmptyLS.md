# Empty LS Writeup (GoogleCTF 2024)



**Date:** 29 May 2021

**Author:** Unknown  
**Type:** Web  
**Difficulty:** Medium  
**Prompt:**  


Last month we hired a new junior DevOps Enginner to migrate all our services into containers. He was super hyped about Docker and in such a hurry, that he forgot about best practices. You want to use one of our images? Sure, no problem. Just download image file, run "docker load < image" and you are ready to go!

## Solution


After extracting the file and analyzing we find 3 things:

```bash
1. `SECRET_KEY=58703273357638792F423F4528482B4D6251655468566D597133743677397A24` from the file `7dabd7d32d701c6380d8e9f053d83d050569b063fbcf7ebc65e69404bed867a5.json`
2. `image\ee6ac2faa564229d89130079d3c24dcb016b6818c2a8f3901ad2a7de1fdb0faf\layer.tar\root\.ssh\id_rsa`
3. `cipher.bin` from `image\df6e2b0dba838bcc158171c209ae2c7b8aeec4a8638a2fa981abda520233a170\layer.tar\home\alice\cipher.bin`
```

To decrypt, use the following command:

```bash
ssh-keygen -f id_rsa -e -m pem -p
cat id_rsa
openssl rsautl -decrypt -inkey id_rsa -in cipher.bin -out flag`
```

**Flag: dctf{k33p_y0r_k3ys_s4f3}**


