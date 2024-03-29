using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

// If you rename this namespace, you will need to update the invocation shim
// to match if you intend to test the function with 'amplify mock function'
namespace obriencontracting9bbe333e
{
    // If you rename this class, you will need to update the invocation shim
    // to match if you intend to test the function with 'amplify mock function'
    public class obriencontracting9bbe333e
    {
        /// <summary>
        /// Your Lambda's input type.
        /// Change this to match whatever event you intend to send, or
        /// use one of the Amazon.Lambda.XXXEvents NuGet packages
        /// </summary>
        public class LambdaEvent
        {
            public string key1 { get; set; }
            public string key2 { get; set; }
            public string key3 { get; set; }
        }

        // If you rename this function, you will need to update the invocation shim
        // to match if you intend to test the function with 'amplify mock function'
#pragma warning disable CS1998
        public async Task<dynamic> LambdaHandler(LambdaEvent input, ILambdaContext context)
        {
            context.Logger.LogLine($"Received data: {Newtonsoft.Json.JsonConvert.SerializeObject(input)}");
            return new {
                key1 = input.key1.ToUpper(),
                key2 = input.key2.ToUpper(),
                key3 = input.key3.ToUpper()
            };
        }
    }
}
