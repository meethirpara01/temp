import os
import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

# The URL of the page containing the Excel files
url = "https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=2009"

# The folder where you want to save the downloaded files
download_folder = "rbi_excel_files"

# Create the download folder if it doesn't exist
if not os.path.exists(download_folder):
    os.makedirs(download_folder)

# Send a request to the webpage
response = requests.get(url)

# Parse the HTML content of the page
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the links on the page
links = soup.find_all('a')

# Loop through all the links
for link in links:
    # Get the href attribute of the link
    href = link.get('href')

    # Check if the link points to an Excel file
    if href and (href.endswith('.xls') or href.endswith('.xlsx')):
        # Create the full URL of the Excel file
        file_url = urljoin(url, href)

        # Get the filename from the URL
        filename = os.path.join(download_folder, href.split('/')[-1])

        print(f"Downloading {filename}...")

        # Download the file
        with open(filename, 'wb') as f:
            f.write(requests.get(file_url).content)

        print(f"Downloaded {filename}")

print("\nAll Excel files have been downloaded successfully!")   