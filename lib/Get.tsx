// add new document to collection

export async function getData(CollectionName: string, Document?: string) {
  let firebaseEndpoint: string;

  if (Document) {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/ads-company-285a6/databases/(default)/documents/${CollectionName}/${Document}`;
  } else {
    firebaseEndpoint = `https://firestore.googleapis.com/v1/projects/ads-company-285a6/databases/(default)/documents/${CollectionName}`;
  }

  try {
    const response = await fetch(firebaseEndpoint, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    if (Document) {
      return convertDocumentData(data.fields);
    } else {
      const documents = data.documents.map((doc: any) => {
        const formattedDoc: any = {
          id: doc.name.split("/").pop(),
        };

        for (const field in doc.fields) {
          if (Object.prototype.hasOwnProperty.call(doc.fields, field)) {
            formattedDoc[field] = convertFieldValue(doc.fields[field]);
          }
        }

        return formattedDoc;
      });

      return documents;
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    // throw new Error("Failed to fetch data.");
  }
}

function convertDocumentData(fields: any): any {
  const convertedData: any = {};

  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      convertedData[field] = convertFieldValue(fields[field]);
    }
  }

  return convertedData;
}

function convertFieldValue(field: any): any {
  if (field.stringValue !== undefined) {
    return field.stringValue;
  } else if (field.integerValue !== undefined) {
    return parseInt(field.integerValue, 10);
  } else if (field.timestampValue !== undefined) {
    return new Date(field.timestampValue);
  } else if (field.booleanValue !== undefined) {
    return field.booleanValue;
  } else if (field.arrayValue !== undefined) {
    return field.arrayValue.values.map((value: any) =>
      convertFieldValue(value)
    );
  } else if (field.mapValue !== undefined) {
    const mapData: any = {};
    for (const key in field.mapValue.fields) {
      if (Object.prototype.hasOwnProperty.call(field.mapValue.fields, key)) {
        mapData[key] = convertFieldValue(field.mapValue.fields[key]);
      }
    }
    return mapData;
  } else {
    // Handle other field types as needed
    return null;
  }
}
